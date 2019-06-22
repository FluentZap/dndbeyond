# Dndbeyond

This project is made with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

This is an angular recreation of the site [D&D Beyond](https://www.dndbeyond.com/)

## Installation

This project requires NPM, Angular, node version 10+, and Firestore to run.

You will need a firebase database to serve the content to the website. To install create a file called api_keys.ts and export your API keys as using the variable name "firebaseConfig".

The database entries are formated as
```JSON
{
    //under collection "articles"
    "212-name-of-dynamic-url" :
    {
        "article" : "Article heading that will be displayed on the main page",
        "author" : "Authors Name",
        "coverimage" : "../../assets/articles/imagefile.png",
        "posted": "June 10, 2019 at 12:00:00 AM UTC-7", //timestamp data type
        "title" : "Heading to be displayed over article"
    }
}

```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` to view the site.

## Current working features

Completed components for Nav bar and Footer
Navbar menus open and close
Working youtube frame

## Todo list

- [x] Responsive design for width breakpoint
- [ ] Multiple links from the front page
- [ ] Build routes for multiple pages
- [ ] Character builder page
- [ ] Login functionality
- [ ] Item database