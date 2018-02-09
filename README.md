# Vuejs + Laravel Starter 

> A Vue + Laravel Starter project.

## Features

- Laravel 5.6
- Vue + VueRouter + Vuex + VeeValidate
- Pages with custom layouts 
- Login, register and password reset
- Authentication with JWT
- Vuetifyjs + Material Icons

## Installation

- `git clone https://github.com/cesaramirez/vue-laravel-starter.git`
- `cd vue-laravel-stater`
- `cp .env.example .env`
- `composer install`
- `php artisan key:generate`
- `php artisan jwt:secret`
- Edit `.env` and set your database connection details
- `php artisan migrate`
- `yarn`
- `yarn dev`

## Usage

#### Development

```bash
# build and watch
yarn watch

# serve with hot reloading
yarn hot
```

#### Production

```bash
yarn production
```
