#### Please Backup your project first!!!!!!!!
# run this in your project root folder
# rename all your src files
cd src
find . -name "*.css" -exec bash -c 'mv "$1" "${1%.css}".scss' - '{}' \;
cd ..

# change angular cli config in angular.json
sed -i -e 's/styles.css/styles.scss/g' angular.json

# Change all ts-files (change .css to .scss) in @Module styleUrls
find ./src -name "*.ts" -exec sed -i -e 's/\(.*styleUrls.*\)\.css\(.*\)/\1\.scss\2/g' {} +
find ./src -name "*.ts-e" -exec bash -c 'rm "$1"' - '{}' \;

# Angular <6.1 (running on 8 doesn't break anything)
ng set defaults.styleExt scss
# Angular 6+ version of the above one
ng config schematics.@schematics/angular:component.styleext scss

# Add node-sass npm module
npm install node-sass --save-dev

# Everything should work now!