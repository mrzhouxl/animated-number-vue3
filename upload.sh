buildSrc = "./dist"

echo "开始打包"
yarn build;
sleep 1s;
echo "打包完成";
rm -rf './animation-number-vue3';
mkdir animation-number-vue3
cd animation-number-vue3
