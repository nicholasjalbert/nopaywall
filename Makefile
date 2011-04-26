all:
	chromium-browser --pack-extension=./killer 

clean:
	rm -f killer.pem killer.crx
