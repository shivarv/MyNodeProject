var express        = require( 'express' );
var http           = require( 'http' );
var jsforce        = require('jsforce');
var cors = require('cors');
var bodyParser = require('body-parser');

var app            = express();
app.set( 'port', process.env.PORT || 3001 );
app.use(cors({credentials: true, origin: 'http://localhost:3001'}));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); 


var http = require('http');
var fs = require('fs');
var path = require('path');
var public = __dirname + "/";
app.use(express.static(public));

app.get('/', function (req, res) {
      res.sendFile(path.join(public + "index1updated.html"));

   // res.sendFile(path.join(__dirname + '/index1updated.html'));

	
});




app.get('/fetchAnswerHistory', function (req, res) {
	var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://login.salesforce.com'
  });
  var username = 'shivarv@lightning.com';
  var password = 'Slearncurve@100ezZTj0Z8vvGuW5rHeenZi6N32';
  conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
   console.log(conn.accessToken);
   console.log(conn.instanceUrl);
   var body=req.body;
   console.log(body);
  	res.setHeader('content-type', 'application/json');

	
	console.log("https://shivalightningtrail-dev-ed.my.salesforce.com/services/apexrest/shivalightning/AnswerHistoryWebService");
	conn.apex.get("/services/apexrest/shivalightning/AnswerHistoryWebService/", body, function(err, resData) {
  if (err) { 
  return console.error(err);
  }
  console.log("response: "+ resData);
  console.log("response: "+JSON.stringify(resData));
 // if(JSON.stringify(resData)=="\"\"")
//	  res.send(null);
 // else
		  res.send(JSON.stringify(resData));

  });
  });
	return res;
});

app.post('/updateRecords', function (req, res) {
	var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://login.salesforce.com'
  });
  var username = 'shivarv@lightning.com';
  var password = 'Slearncurve@100ezZTj0Z8vvGuW5rHeenZi6N32';
  conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
   console.log(conn.accessToken);
   console.log(conn.instanceUrl);
   var body=req.body;
   console.log(body);
   /*
   var body={"questions":[{"Id":"a0F7F0000036HGb","shivalightning__QuestionName__c":"questionUpd3InAjax","shivalightning__indexValue__c":"16","shivalightning__type__c":"text"},
   {"Id":"a0F7F0000036HGW","shivalightning__QuestionName__c":"questionUpd2","shivalightning__indexValue__c":"16","shivalightning__type__c":"text"}]};
*/
//	var body = JSON.stringify(updateDemo);
	
	console.log("https://shivalightningtrail-dev-ed.my.salesforce.com/services/apexrest/shivalightning/updateQuestionWebservice");
	conn.apex.post("/services/apexrest/shivalightning/updateQuestionWebservice/", body, function(err, res) {
  if (err) { return console.error(err); }
  console.log("response: ", res);
  // the response object structure depends on the definition of apex class
	});
  });
	
});


app.post('/createRecords', function (req, res) {
	var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://login.salesforce.com'
  });
  var username = 'shivarv@lightning.com';
  var password = 'Slearncurve@100ezZTj0Z8vvGuW5rHeenZi6N32';
  conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
   console.log(conn.accessToken);
   console.log(conn.instanceUrl);
   var body=req.body;
   console.log(body);
  	res.setHeader('content-type', 'application/json');

	
	console.log("https://shivalightningtrail-dev-ed.my.salesforce.com/services/apexrest/shivalightning/createQuestionWebService");
	conn.apex.post("/services/apexrest/shivalightning/createQuestionWebservice/", body, function(err, resData) {
  if (err) { 
  return console.error(err);
  }
  console.log("response: "+ resData);
  console.log("response: "+JSON.stringify(resData));
		  res.send(JSON.stringify(resData));

  });
  });
	return res;
});


app.get('/fetchAnswers', function (req, res) {
	var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://login.salesforce.com'
  });
  var username = 'shivarv@lightning.com';
  var password = 'Slearncurve@100ezZTj0Z8vvGuW5rHeenZi6N32';
  conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
   console.log(conn.accessToken);
   console.log(conn.instanceUrl);
   var body=req.body;
   console.log(body);
  	res.setHeader('content-type', 'application/json');

	
	console.log("https://shivalightningtrail-dev-ed.my.salesforce.com/services/apexrest/shivalightning/fetchAnswersWebService");
	conn.apex.get("/services/apexrest/shivalightning/fetchAnswersWebService/", body, function(err, resData) {
  if (err) { 
  return console.error(err);
  }
  console.log("response: "+ resData);
  console.log("response: "+JSON.stringify(resData));
 // if(JSON.stringify(resData)=="\"\"")
//	  res.send(null);
 // else
		  res.send(JSON.stringify(resData));

  });
  });
	return res;
});

app.post('/submitAnswers', function (req, res) {
	console.log("in submit answers function ");
	var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://login.salesforce.com'
  });
  var username = 'shivarv@lightning.com';
  var password = 'Slearncurve@100ezZTj0Z8vvGuW5rHeenZi6N32';
  conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
   console.log(conn.accessToken);
   console.log(conn.instanceUrl);
   var body=req.body;
   console.log(body);
  	res.setHeader('content-type', 'application/json');

	
	console.log("https://shivalightningtrail-dev-ed.my.salesforce.com/services/apexrest/shivalightning/fetchAnswersWebService");
	conn.apex.post("/services/apexrest/shivalightning/fetchAnswersWebService/", body, function(err, resData) {
  if (err) { 
  return console.error(err);
  }
  console.log("response: "+ resData);
  console.log("response: "+JSON.stringify(resData));
		  res.send(JSON.stringify(resData));

  });
  });
	return res;
});



app.post('/insertRecord', function (req, res) {
	console.log("begins " +JSON.stringify(req.body)+"ends");
	console.log("shivalightning__indexValue__c " +req.body.shivalightning__indexValue__c+"ends");

	var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://login.salesforce.com'
  });
  var username = 'shivarv@lightning.com';
  var password = 'Slearncurve@100ezZTj0Z8vvGuW5rHeenZi6N32';
  conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
   console.log(conn.accessToken);
   console.log(conn.instanceUrl);
   
	conn.sobject("shivalightning__MyDailyPlannerQuestion__c").create(
		req.body,
			function(err, rets) {
				console.log("in fn");
				if (err)
					{ 
				return console.error(err);
				}
				for (var i=0; i < rets.length; i++) 
				{
				if (rets[i].success)
				{
				console.log("Updated Successfully : " + rets[i].id);
				}
				}
		});


});
console.log("fn ends");
});

app.get('/getData', function (req, res) {
  var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
     loginUrl : 'https://login.salesforce.com'
  });
  var username = 'shivarv@lightning.com';
  var password = 'Slearncurve@100ezZTj0Z8vvGuW5rHeenZi6N32';
  conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
   console.log(conn.accessToken);
   console.log(conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
	res.setHeader('content-type', 'application/json');
//	res.writeHead(200, {'Content-Type': 'application/json'});
		// Send the response body as "Hello World"
	//res.end('Hello World\n');
	console.log("query starts below ");
conn.query('SELECT Id, Name,shivalightning__indexValue__c	,shivalightning__QuestionName__c,shivalightning__type__c FROM shivalightning__MyDailyPlannerQuestion__c limit 10', function(err, rec) {
var recordDataArray=[];	
	if (err) { 
		 console.log("error in system record fetch");
		  console.error(err);
 return res.send(JSON.stringify({error:"val"}));
		  }
	for (var property in rec) {
		console.log("proerty name "+property);
	}
  	  // console.log(rec);
 try {
          console.log("it is a json");
		//  console.log(rec.records);
		  	
          var jsonData=[];
		  for(var i=0;i<rec.records.length;i++)
		  {
			  console.log(rec.records[i]);
			  jsonData.push({Id:rec.records[i].Id,Name:rec.records[i].Name,type:rec.records[i].shivalightning__type__c,value:rec.records[i].shivalightning__QuestionName__c,indexValue: rec.records[i].shivalightning__indexValue__c	});
		  }
		  console.log(recordDataArray.length);
		  for(var j=0;j<recordDataArray.length;j++)
		  {
		  console.log(recordDataArray[j] + " " +recordDataArray[j].Id + " "+recordDataArray[j].Name);
		  }
		  console.log("before send ");
		  res.send(JSON.stringify(jsonData));
    }
	catch (e) {
          console.log("error reason is "+e);
    }

return recordDataArray;
	   	//   console.log('\n');

  });
 //for(var i=0;i<records.length;i++)
/*	 console.log(records[i].Id +" "+records[i].Name);
  var obj=new Object();
	obj.userInfoId=userInfo.id;
	obj.organizationId= userInfo.organizationId;
		res.send(JSON.stringify({"id":userInfo.id,"orgId": userInfo.organizationId}));
	*/
  });
  //res.send('Hello World');
});


http.createServer( app ).listen( app.get( 'port' ), function (){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
});