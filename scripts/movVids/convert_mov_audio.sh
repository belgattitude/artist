set -e
convertDir="./converted"
shopt -s extglob nullglob

if [ ! -d "$convertDir" ];
then
    echo "Creating $convertDir directory."
    mkdir "$convertDir"
fi

for vid in *.mov; do
 noext="${vid%.mov}"
 ffmpeg -i "$vid" -acodec pcm_s16le -vcodec copy "${convertDir}/${noext// /_}.pcm.mov"
    #mv "$vid" "$origdir"
done