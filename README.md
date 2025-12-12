# React and Laravel Login, Registration, Logout and CRUD operation

Login, Registration, Logout and CRUD operation with React and Laravel.
## Project Details

- **GitHub Repository**: [https://github.com/shohag-cse-knu/auth_crud_react_laravel.git](https://github.com/shohag-cse-knu/auth_crud_react_laravel.git)

## Features

- **Employee List**: Shows all Employees.
- **Add Employee**: Adding employee with name, email, and password.
- **Edit Employee**: Updating employee with name, email, and password.
- **Delete Product**: Deleting a employee.

## Prerequisites

- **Laravel**: 
- **PHP**:
- **MySQL**
- **Composer**: 
- **NodeJS**:

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/shohag-cse-knu/auth_crud_react_laravel.git
````
### 2. Navigate to crud-laravel
```bash
cd myapi
````
### 3. Composer Install
```bash
composer install
````
### 4. .env
```bash
cp .env.example .env
````
Create a Database and modify Database name, username and password in .env file.

### 5. Key Generate
```bash
php artisan key:generate
````
### 6. DB Migration
```bash
php artisan migrate
````
### 7. DB Seed
```bash
php artisan db:seed
````
### 8. Symblolic Link
storage:link is used in Laravel to create a symbolic link from the public/storage directory to the storage/app/public directory.
```bash
php artisan storage:link
````
### 9. Run Laravel Project
```bash
php artisan serve
````
### 10. Navigate to React Project
```bash
cd myapp
````
### 11. Install npm
```bash
npm install
````
### 12. Run React Project
```bash
npm start
````

## Technologies Used

- **Frontend**: ReactJS
- **Backend**: Laravel REST API, MySql

## To Login check DatabaseSeeder.php and UserFactory.php

## Contributing

To contribute:

1. Fork the repository.
2. Create a branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Contact

For questions or suggestions, please contact:

- **Name**: Syfur Rahaman Shohag
- **Email**: [syfur.srs@gmail.com](mailto:syfur.srs@gmail.com)
- **GitHub**: [https://github.com/shohag-cse-knu](https://github.com/shohag-cse-knu)
