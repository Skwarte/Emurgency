var UI = require('ui');
var ajax = require('ajax');
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Non Urgent',
      }, {
        title: 'Urgent'
      }, {
        title:'Contact List'
      }]
    }]
  });
  menu.on('select', function(e) {
    if(e.itemIndex === 0) {
     
    sendText("I need help and due to the circumstances cannot get to my phone right now, please come to my location: 42.2926747,-83.71622490000001");
  var mainNonUrg = new UI.Card({
  title: 'Sending',
  subtitle: 'Your message is being sent to your contact list',
});
    mainNonUrg.show();
    }
    else if(e.itemIndex == 1){
      sendText("THIS IS AN EMERGENCY MY LOCATION IS: 42.2926747,-83.71622490000001");
  var mainUrg = new UI.Card({
  title: 'Sending',
  subtitle: 'Your message is being sent to your contact list',
});
    mainUrg.show(); 
    }
    else {
    var contact = new UI.Menu({
      sections: [{
      items: [{
        title: 'Sam Kwarteng',
        }]
      }]
    });
      contact.show();
      contact.on('select', function(e){
             var main = new UI.Card({
  title: 'Sam Kwarteng',
  subtitle: '+18888888888',
});
        main.show();
      });
    }
  });
  menu.show();

function sendText(message) {
  ajax({
    url: 'https://AC5381473413333239de1f629a23c5c874:dca4cc2144a1a93eae100b7adb125c86@api.twilio.com/2010-04-01/Accounts/AC5381473413333239de1f629a23c5c874/Messages',
    method: 'post',
    data: {
      To: '+18888888888', //number is now a default number instead of an actual phone number
      From:'+12243658666',
      Body: message
    }
  });
}