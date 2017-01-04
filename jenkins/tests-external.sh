FILE=index.html
MINIMUMSIZE=1000
BACKOFF=15

for i in {1..3}
do
	echo "wget fml.dev.christophhaefner.de -O $FILE";
	wget fml.dev.christophhaefner.de -O $FILE;
	if [ "$?" == "0" ]; then
		break
	else
		BACKOFF=$(($BACKOFF * 2))
		echo "backoff: $BACKOFF"
		sleep $BACKOFF
	fi
done

ACTUALSIZE=$(wc -c <"$FILE")
echo "actualisize: '$ACTUALSIZE'";

if [ $ACTUALSIZE -ge $MINIMUMSIZE ]; then
	echo "file is greater than $MINIMUMSIZE";
	exit 0;
else
	echo "file is smaller than $MINIMUMSIZE";
	exit 1;
fi

