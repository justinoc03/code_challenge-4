var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: false } );
var pg = require( 'pg' );
var connectionString = 'postgres://localhost:5432/code_challenge_04';
var port = process.env.PORT || 8027;

// spin up our tasty treat server
app.listen( port, function(){
  console.log( 'server up on ' + port );
}); //end server up

// static folder
app.use( express.static( 'public' ) );

// base URL
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});


////////////////////get treats already in DB//////////////////////////////
app.get( '/treats', function( req, res ){
  console.log( 'in .get Treats' );
  // connect to db
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    } // end error
    else{
      console.log( 'connected to treats db' );
      var resultsArray = [];
      var queryResults = client.query( 'SELECT * FROM treats' );
      queryResults.on( 'row', function( row ){
        resultsArray.push( row );
      }); //end on row
      queryResults.on( 'end', function(){
        done();
        console.log('sending out to client:', resultsArray);
        res.send( resultsArray );
      }); // end on end
    } // end no error
  }); // end pg connect
}); // end get all

////////////////////post treats already in DB//////////////////////////////
app.post('/treats', urlencodedParser, function (req, res) {
  console.log('in .post treats');
  console.log('req.body', req.body);
  //create variables from req
    var name = req.body.name;
    var description = req.body.description;
    var pic = req.body.url;

  console.log(name, description, pic);
  //connect to database
  pg.connect( connectionString, function (err, client, done) {
    if (err){
      console.log(err);
    }else {
      console.log('connected to DB (treats post)');
      client.query('INSERT INTO treats(name, description, pic) VALUES($1, $2, $3)', [name, description, pic]);
      res.send({success: true});
    }//end else
  });//end pg connect
});//end app.post
