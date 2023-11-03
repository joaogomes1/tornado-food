## Important information

(includes migration to typescript)
create app
remove package-lock.json
yarn
clear elements from src/app/page.tsx
clear src\app\globals.css
leave tailwind headers
remove public\next.svg
public\vercel.svg
copy content from src\assets\global.css to src\app\globals.css
copy files from src\assets (except for global.css) to public

create components directory at src
copy src\components\LayoutComponents to src\components

copy src\pages\Login src\pages\Register to src\app
rename index.jsx to page.tsx
src\app\Register\page.tsx
fix imports
fix parameters of type 'any'

error
bcryptjs not found (something like that)
at
src\app\api\register\route.ts
fix

```bash
yarn add bcryptjs @types/bcryptjs
```

error
Module '"bcryptjs"' has no exported member 'bcrypt'
at
src\app\api\register\route.ts
fix
remove the curly braces when importing bcrypt from bcryptjs
