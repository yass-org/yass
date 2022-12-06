
cd ./yass-default-tokens
npm run build
echo "Built Yass Default Tokens"
cd ../yass-css
npm run build
cd ../
echo "Built Yass CSS stylesheet"
./node_modules/.bin/ts-node ./yass-components-react/scripts/yass.ts
echo "Built Yass Components React"
