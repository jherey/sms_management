# SMS MANAGEMENT

This API creates an SMS management API using Node.js that models the following abstractions:

## Overview

The SMS Management system helps to send messages to a contact. Also, ensures the right contact gets the message.

## Project Structure

The project structure follows the **MVC** (Model-View-Controller) pattern. You can think of the **JSON** representation of data returned by the API as the 'view'.
```
├── src/
    ├── bin
    │   └── www.js
    ├── controllers
    │   └── ContactController.js
    ├── helpers
    │   └── validationErrorHandler.js
    ├── middlewares
    │   └── verifyUserInputs.js
    ├── models
    │   └── Contact.js
    ├── repositories
    │   └── BaseRepository.js
    ├── routes
    │   └── index.js
    ├── app.js
```

## Requirements

* Node.js v10.x or higher
* npm
* MongoDB instance (local or remote)

## Getting Started

```
$ git clone https://github.com/jherey/sms_management.git
$ cd sms_management
$ npm install
$ npm dev                     # For development purpose
$ npm start                   # To run production build
```

You should now be able to access the API via http://localhost:4500/api/

**NOTE:** Create a `.env` file configuration following the `.env.example`.

## Project Details
`SMS:`
 - person sending sms
 - person receiving sms
 - message of sms
 - sms status

`Contact:`
- name of person
- phone number of person

`The following relationships are represented in the model:`
- All sms sent by a Contact are linked to them
- All sms sent to a Contact are linked to them
- Deleting a contact removes the messages they sent and references to messages they received.

## API Endpoints

<table>
<tr><th>HTTP VERB</th><th>ENDPOINTS</th><th>DESCRIPTION</th></tr>
<tr><td>POST</td><td>/api/contacts</td><td>Creates a contact</td></tr>
<tr><td>GET</td><td>/api/contacts</td><td>Gets all contact</td></tr>
<tr><td>POST</td><td>/api/sms/:contactId</td><td>Sends sms to a contact</td></tr>
<tr><td>GET</td><td>/api/sms</td><td>Gets all sms</td></tr>
<tr><td>GET</td><td>/api/sms/sent/:contactId</td><td>Gets all contact's sent sms</td></tr>
<tr><td>GET</td><td>/api/sms/received/:contactId</td><td>Gets all contact's received sms</td></tr>
<tr><td>DELETE</td><td>/api/contacts/:contactId</td><td>Delete a contact</td></tr>