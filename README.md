# File_Share: Image Hosting Website using Cloudinary API, Next.js, Next.js UI, Tailwind CSS, TypeScript, and Node.js

This repository contains the code for a full-stack image hosting website built using the Cloudinary API, Next.js, Next.js UI, Tailwind CSS, TypeScript, and Node.js. The website allows users to upload, store, and manage their images in the cloud using Cloudinary's powerful image management features.

## Technology Stack

- **Cloudinary API**: A cloud-based image and video management service that handles image processing, optimization, and storage.
- **Next.js**: A popular React framework that enables server-side rendering (SSR) and static site generation (SSG) with built-in TypeScript support.
- **Next.js UI**: Pre-designed UI components and styles tailored for use with Next.js applications, providing a modern and consistent look-and-feel.
- **Tailwind CSS**: A utility-first CSS framework with pre-built classes for quick and responsive UI development.
- **TypeScript**: A statically typed superset of JavaScript that enhances code maintainability and scalability.
- **Node.js**: A JavaScript runtime environment for server-side operations, such as image uploads and interactions with the Cloudinary API.

## Getting Started

To set up and run the project locally, follow these steps:

1. **Prerequisites**: Ensure you have Node.js and npm (Node Package Manager) installed on your system.

2. **Clone the Repository**: Clone this repository to your local machine using Git.

```bash
git clone https://github.com/abhi8960git/File_Share.git
```

3. **Install Dependencies**: Navigate to the project directory and install the required dependencies.

```bash
cd File_Share
npm install
```

4. **Environment Variables**: Create a `.env.local` file in the root directory to store your Cloudinary API credentials and Gmail service settings for email handling.

```plaintext
MONGO_URL=your_mongo_db_connection_string
PORT=your_preferred_port

# Cloudinary API Credentials
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLOUDINARY_API_ENV_VAR=your_cloudinary_env_var
CLOUDINARY_API_CLOUD=your_cloudinary_cloud

# Gmail Service Settings for Nodemailer
GMAIL_USER=your_gmail_username
GMAIL_PASS=your_gmail_password
```

5. **Database Setup**: Set up MongoDB to store image metadata and user information. Ensure you have MongoDB installed and running on your system. Replace `your_mongo_db_connection_string` in the `.env.local` file with your MongoDB connection string.

6. **Run the Application**: Start the development server to run the Next.js application.

```bash
npm run dev
```

7. **Access the Application**: Open your web browser and navigate to `http://localhost:3000` to access the image hosting website.

## Features

- User registration and authentication using Passport.js for secure image management.
- Image upload with automatic optimization and resizing using the Cloudinary API.
- Image retrieval with support for different image formats and resolutions.
- Image processing capabilities, including applying filters and creating thumbnails.
- User-friendly UI designed with Next.js UI and Tailwind CSS for an excellent user experience.
- Once an image is uploaded, the website provides a hosted link to the Cloudinary image, which users can share via email or download the image.
- Nodemailer integration with Gmail services to handle email notifications and image sharing.

## Deployment

To deploy the website to a hosting platform, consider using Vercel, which provides seamless integration with Next.js applications and easy scaling.

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Contribution

Contributions to the project are welcome! If you find any issues or have suggestions for improvements, feel free to open a pull request or submit an issue.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code for both personal and commercial purposes.

---

With this readme, you have a comprehensive overview of your image hosting website's architecture, technologies used, and setup instructions. It also includes the description of image sharing via email using Nodemailer with Gmail services. Customize the details further as per your requirements and enhance the project based on your specific use case. Happy coding!
