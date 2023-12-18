### Base Forum

#### Pages

- Home Page with the most latest threads
- Search Page with searchbar and results
- Sign In Page -> Username + Password
- Sign Up Page -> Username + Password + Firstname + Lastname
- Thread Detail Page
- User Profile Page


#### Components

- Thread Preview Card
- Thread Comment Card

- Button
- TextField
- TextArea


#### Database

- User
    - Id
    - Username
    - Password
    - Firstname
    - Lastname
    - CreatedAt
- Threads
    - Id
    - UserId
    - Question
    - Likes
- Comments
    - Id
    - UserId
    - ThreadId
    - Message
    - Likes
    - CreatedAt

#### Tech Stack

- Next.js / React Frontend + Backend API
- MongoDB database
- Prisma ORM
- Next-Auth
- Vercel Hosting