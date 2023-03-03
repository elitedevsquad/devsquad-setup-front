<p align="center">
    <img src="https://devsquad.com/assets/site/logo.svg" width="50%" alt="DevSquad">
</p>

# Setup for Front-end

## Installation
Run the command bellow and everything will be done automagically
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/elitedevsquad/devsquad-setup-front/master/run)"
```

## ⚠️ Attention
After running the command, please add these scripts in your `package.json` file:

```json
{
    "scripts": {
        "style:check": "npx prettier --check .",
        "style:fix": "npx prettier --write .",
        "lint": "eslint --ext .ts,.js,.vue .",
        "lint:fix": "eslint --fix --ext .ts,.js,.vue .",
        "cy:run": "cypress run",
        "test": "start-server-and-test dev http://localhost:3000 cy:run"
    }
}
```

## Post Install
After the installation, update your `readme.md`