file=index.html
minimumsize=2000

wget fml.dev.christophhaefner.de -O $file;

actualsize=$(wc -c <"$file")
if [ $actualsize -ge $minimumsize ]; then
	# everything seams fine
	exit 0;
else
	# file looks to small
	exit 1;
fi

