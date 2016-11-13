file=index.html
minimumsize=1000

echo "wget fml.dev.christophhaefner.de -O $file";
wget fml.dev.christophhaefner.de -O $file;

actualsize=$(wc -c <"$file")
echo "actualisize: '$actualsize'";

if [ $actualsize -ge $minimumsize ]; then
	echo "file is greater than $minimumsize";
	exit 0;
else
	echo "file is smaller than $minimumsize";
	exit 1;
fi

