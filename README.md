Books!

Fun little project to experiment with the [Goodreads API](https://www.goodreads.com/api/). Plug in your own Goodreads ID for fancy book browsing, or judge my poor taste in literature. 

Developed using Ruby 2.2.3. Backend Rails API with an Angular frontend. You can find it live at http://jojis-books.herokuapp.com

To run locally fork/clone down and navigate to the project directory.
'''shell
bundle
rake db:create
rake db:migrate
'''
While still in the projects root directory, create a .env file and populate it with your [Goodreads developer key and secret](https://www.goodreads.com/api/keys) like so:
'''
KEY="YOUR_DEVELOPER_KEY_HERE"
SECRET="YOUR_SECRET_KEY_HERE"
'''
And that's it! 
'''shell
rails s
'''
and you are getting the sweetest indulgence of literary nostalgia you can imagine!