set -x;
FILE=index.html
MINIMUMSIZE=1000
BACKOFF=15
i=0
max=5

while [ $i -lt $max ]
do
	wget fml.dev.christophhaefner.de -O $FILE;
	if [ $? -eq 0 ]; then
		break
	else
		BACKOFF=$(($BACKOFF * 2))
		echo "backoff: $BACKOFF"
		sleep $BACKOFF
	fi
	i=$(($i + 1))
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

