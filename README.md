# Laravel REST API and React Login, Logout and CRUD operation

Login, Logout and CRUD operation with Laravel REST API and React JS.
## Project Details

- **GitHub Repository**: [https://github.com/shohag-cse-knu/auth_crud_react_laravel.git](https://github.com/shohag-cse-knu/auth_crud_react_laravel.git)

## Features

- **Product List**: Shows all products.
- **Create Product**: Adding product with name, description, and image.
- **Edit Product**: Updating product information.
- **Delete Product**: Deleting a product.

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
### 7. Symblolic Link
storage:link is used in Laravel to create a symbolic link from the public/storage directory to the storage/app/public directory.
```bash
php artisan storage:link
````
### 8. Run Laravel Project
```bash
php artisan serve
````
### 9. Navigate to React Project
```bash
cd myapp
````
### 10. Install npm
```bash
npm install
````
### 11. Run React Project
```bash
npm start
````

## Technologies Used

- **Frontend**: ReactJS
- **Backend**: Laravel REST API, MySql

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
