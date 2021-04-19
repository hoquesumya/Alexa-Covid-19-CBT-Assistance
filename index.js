/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
let cond;

let x=0;

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Hi, I am Nao. I am here to give you counseling on your anxiety issues. Can I have your name, please? Note: We are not professional therapists or counselors. ';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const NameRequestHandler={
  canHandle(handlerInput)  {
      return handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='NameIntent';
      
  },
  handle(handlerInput){
      const nametype= handlerInput.requestEnvelope.request.intent.slots.name.value;
      const speakOutput='Hello ' +  nametype +' .How are you doing today?';
      
        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('How are you doing today?')
            .getResponse();
  }
    
};

const SituationHandler={
  canHandle(handlerInput){
       return handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='SituationIntent';
      
  },
  handle(handlerInput){
      const con= handlerInput.requestEnvelope.request.intent.slots.condition.value;
  
      if(con==='good'||con==='great'){
          return handlerInput.responseBuilder
            .speak('Thats great!! I am glad to hear that')
           // .reprompt('How are you doing today?')
            .getResponse();
          
      }
      else{
          return handlerInput.responseBuilder
            .speak('Do you want to talk about it?')
           // .reprompt('How are you doing today?')
            .getResponse();
      }
  }
};
const poshandler={
    
  canHandle(handlerInput) {
      return  handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='yesIntent';
  },
  handle(handlerInput){
      
    /* return handlerInput.responseBuilder
            .speak('What is going through your head right now? World, your family, Quarantine, death')
            .reprompt('How are you doing today?')
            .getResponse();*/
            
             return handlerInput.responseBuilder
            .speak('What is going through your head right now? World, your family, Quarantine, death ' )
            .reprompt('How are you doing today')
            .getResponse(); 
            
      
    }
};
/*************************/

const Goingheadhandler={
     canHandle(handlerInput){
         return handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='goingheadIntent';
     },
      handle(handlerInput){
           const nametype= handlerInput.requestEnvelope.request.intent.slots.head.value;
           cond=nametype;
          
            return handlerInput.responseBuilder
            .speak('When did it start? ' + cond )
           // .reprompt('How are you doing today?')
            .getResponse(); 
            
           
  }
}

const ResponsehandlerNeg={
    canHandle(handlerInput) {
      return  handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='AMAZON.NoIntent';
  },
  handle(handlerInput){
      
     return handlerInput.responseBuilder
            .speak('Sure, no problem. I am here to listen when you are ready to talk. Just type "ready" or " I am here" on the chatbot. I will be with you.')
           .reprompt('How are you doing today?')
            .getResponse();
      
    },
   
    
    
};
const ReadyHandler={
  canHandle(handlerInput){
      return  handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='readyIntent';
  } ,
  handle(handlerInput){
     return handlerInput.responseBuilder
            .speak('Oh, Hii!!! Nice to hear from you again. So What is going through your head right now? Death, the World around you, yoour Family or Quarantine')
           .reprompt('How are you doing today?')
            .getResponse(); 
  }
    
};




const ConfirmdayHnadler={
    
     canHandle(handlerInput){
      return  handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='timeIntent';
  } ,
  handle(handlerInput){
     return handlerInput.responseBuilder
            .speak('How bad does your anxiety get??')
           .reprompt('How are you doing today?')
            .getResponse(); 
  }
    
};

const BadsituationHandler={
       
     canHandle(handlerInput){
      return  handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='badIntent';
  } ,
  handle(handlerInput){
     return handlerInput.responseBuilder
            .speak('Do you have any panic attacks? If you have panic attacks, please type "Yes, I have" or in case of no panic attacks please type "No, I dont')
           .reprompt('How are you doing today?')
            .getResponse(); 
  }
     
    
}

const PanicHandler={
    canHandle(handlerInput){
      return  handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='PanicIntent';
  } ,
  handle(handlerInput){
      const nametype= handlerInput.requestEnvelope.request.intent.slots.pan.value;
      
      let speakA;
      
      if(nametype==='Yes, I have'){
          speakA='I will recommend you to contact our counselor, Sumya Hoque. You can click on the link below to set up an appointment';
      }
      else 
         {
          speakA='How is it impecting your life right now.'   ;
         }
    
     return handlerInput.responseBuilder
            .speak(speakA)
           .reprompt('How are you doing today?')
            .getResponse(); 
    
}
}

const ImpactHandler={
    canHandle(handlerInput){
        return  handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='ImpactIntent';
    },
    handle(handlerInput){
        return handlerInput.responseBuilder
            .speak('I am sorry you are dealing with that. It must be really hard. You are not alone. Lets begin with the assessment to establish and record how you feel about certain situations. Please rate the stress and fear you feel about being at a nursing home during the coronavirus outbreak from 1 no discomfort to 5 extreme discomforts')
           .reprompt('How are you doing today?')
            .getResponse()
    }
}

const RatingHandler={
        canHandle(handlerInput){
        if(x<3){
        
        return  handlerInput.requestEnvelope.request.type==='IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name==='numberIntent';
        }
        
    },
    handle(handlerInput){
        let speakA;
        if(x===0){
            speakA='Please rate the stress and fear you feel about the death of people during the coronavirus outbreak from 1 no discomfort to extreme worst discomforts.';
            x++;
        }
        else if(x===1){
            speakA='Please rate the stress and fear you feel about your family during the coronavirus outbreak from 1 no discomfort to 5 extreme discomforts.';
            x++;
        }
        else if(x===2){
            speakA='Please rate the stress and fear you feel about Worlds current situation during the coronavirus outbreak from 1 no discomfort to 5 extreme discomforts. ';
            x++;
        }
       
        
        
        
        return handlerInput.responseBuilder.speak(speakA)
        .reprompt('How are you doing')
        .getResponse();
        
    },
    
}


    //end of the assessment, starting of the therapy //
    const RatingHandler4={
         canHandle(handlerInput){
        if(x===3){
          return handlerInput.requestEnvelope.request.type==='IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name==='numberIntent';   
        }
         },
        handle(handlerInput){
            
            let speakA;
            let s=cond;
            //if statement is not working
            if( s==='world'){
               speakA='Thank you, for compelting pre-assessment. You have mantioned that World is going on your mind. So, are you anxious about worlds sudden changes because of Covid-19?Is that millions of peoples sudden death or lots of people lost their job?For peoples sudden death type  people s sudden death. For job issues type unemployment'; 
            }
            else if(s==='family'){
                speakA='Thank you, for compelting pre-assessment. You have mantioned that family is going on your mind. So, are you anxious about your family members current economical situation becuse of Covid-19, or you are anxious about their health safety or both during this outbreak';
            }
            else if(s==='quarantine'){
                speakA='Thank you, Sumya for compelting pre-assessment. You have mantioned that Quarantine is going on your mind. So, are you anxious that you are feeling lonely because you cant meet with your family?'
            }
            else if(s==='death'){
                speakA='Thank you, Sum for compelting pre-assessment. You have mantioned that death is going on your mind. So, Are you anxious about death of your own relatives, freinds,own death? Or, its just you are afraid that people are dying a lot beacuse of coronavirus?';
            }
            return handlerInput.responseBuilder.speak(speakA+ s).reprompt('How are you').getResponse();
        }
    }
    
    const WorldHandler={
       canHandle(handlerInput){
       
            return handlerInput.requestEnvelope.request.type==='IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name==='WorldIntent';   
            
       },
        handle(handlerInput){
         const intenttype= handlerInput.requestEnvelope.request.intent.slots.type.value;  
         let speakA;
         if(intenttype==='peoples sudden death'){
             speakA='Sorry to hear that. Its normal to think about your lifes risk during coronavirus outbreak. I know that lots of patients died in a nursing home because of the coronavirus outbreak.However, you can protect yourself by following your doctor s and nurses  orders.Dont worry about that.Here are a couple of exercises I want to give you to reduce your anxiety level.Here are couple of exercises that I want you to do. Are yo ready for that exercises? You can say I am ready for the exercises.';
         }
         else{
             speakA='Lots of people have lost their job because of coronavirus. However, the Govt. is trying really hard to help unemployed people by giving some benefits.Just remind that The sun always smiles behind the clouds.Bad days are going to be over. The world will be the same as before.I want you to do a couple of exercises every day to reduce your anxiety level. Here are couple of exercises  I want you to do. Are you ready for that exercises.You can say I am ready for the exercises.';
         }
         return handlerInput.responseBuilder.speak(speakA).reprompt('Hi').getResponse();
        }
        
    }
    //Hnadle Family Matter//
    const FamilyHandler={
        canHandle(handlerInput){
            return handlerInput.requestEnvelope.request.type==='IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name==='familyIntent';   
        },
        
        handle(handlerInput){
            const intenttype= handlerInput.requestEnvelope.request.intent.slots.situation.value;
            let speakA;
            if(intenttype==='economical situation'){
               speakA='If there any members of your family became unemployed because of the coronavirus outbreak since lots of small businesses have shut down?If so, how many family members in your family have become unemployed '
            }
            else if(intenttype==='health safety'){
                speakA='I am feeling sorry that you are going through this situation. If there anyone in your family is working outside during this coronavirus outbreak? You can say "Yes, work outside" or "Noboy does"'
            }
            return handlerInput.responseBuilder.speak(speakA).reprompt('Hi').getResponse();
        }
    }
    
    const UnemploymentHandle={
        canHandle(handlerInput){
           return handlerInput.requestEnvelope.request.type==='IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name==='UnemploymentIntent'; 
        },
        handle(handlerInput){
           return handlerInput.responseBuilder
           .speak('I am really sorry that your family is going through this situation, and the bad situation of your family is giving you anxietyHowever, here is good news. The govt. are giving unemployment benefits to the people who have lost the job because of the coronavirus. If your family members still didnt apply for the check, here is the link that you can suggest to them to apply for at www.usa.gov/unemployment. Here are couple of exercises  I want you to do. Are you ready for that exercises.You can say I am ready for the exercise.')
           .reprompt('Hi')
           .getResponse(); 
        }
    }
    const WorkOutIntent={
        canHandle(handlerInput){
            return handlerInput.requestEnvelope.request.type==='IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name==='Workoutside';  
        },
        handle(handlerInput){
           return handlerInput.responseBuilder
           .speak('Hmm...I want you to realize that sometimes we dont have another choice in our life except working. The people who are working right now during this outbreak, they are the real hero.Just remind that if they follow the social distancing rules, they will be safe.Here are couple of exercises  I want you to do. Are you ready for that exercises.You can say "I am ready for the exercises"')
           .reprompt('Hi')
           .getResponse(); 
        }
    }
    const Quarantinehandler={
        canHandle(handlerInput){
            return handlerInput.requestEnvelope.request.type==='IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name==='quarantineintent';  
        },
        handle(handlerInput){
           return handlerInput.responseBuilder
           .speak('I am really sorry that you are missing your family members badly.I know Coronavirus has separated us from our beloved people. But, dont worry. If you cant meet them, it doesnt mean that they are not with you. They are in your heart and in your prayers.You arent alone. I am with you also. If you ever need me, I will be with you. Here are couple of exercises  I want you to do. Are you ready for that exercises. You can say "I am ready for the exercises"')
           .reprompt('Hi')
           .getResponse();
        }
    }
    
    const DeathIntentHandler={
       canHandle(handlerInput){
            return handlerInput.requestEnvelope.request.type==='IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name==='DeathIntent';  
        }, 
        
        handle(handlerInput){
            const s= handlerInput.requestEnvelope.request.intent.slots.death.value;
            let speakA;
            
             if(s==='own'){
                speakA='Sorry to hear that. Its normal to think about your life risk during coronavirus outbreak. I know that lots of patients died in a nursing home because of the coronavirus outbreak. However, you can protect yourself by following your doctors and nurses orders.Dont worry about that.Here are couple of exercises  I want you to do. Are you ready for that exercises.You can say "I am ready for the exercises"';
            }
            else if(s==='relative' || 'friend'){
              speakA=' I am sorry that you are going through this. Coronavirus took away lots of life from us. However, there is good news that scientists are trying hard to find a vaccine for treating coronavirus. So, there is still hope that we dont have to lose any people because of coronavirus.Here are couple of exercises  I want you to do. Are you ready for that exercises.You can say "I am ready for the exercises"'  ;
            }
             return handlerInput.responseBuilder.speak(speakA).reprompt('Hi').getResponse();
        }
    }
    
    const ExerciseHandler={
         canHandle(handlerInput){
            return handlerInput.requestEnvelope.request.type==='IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name==='ExerciseIntent';  
        }, 
        
      handle(handlerInput){
          let exercise1,exercise2;
          
          exercise1='First we will do, muscle releif exercises.<break time=".07s"/> take a slow, deep breath through your nose, holding it for three seconds.<break time="3s"/> Now, exhale. Next, put your both arms near to your chest.squeeze your fists.  Take a deep breath hold that breath for three second.  <break time="3s"/>Now, release your breath. Go back to normal position. ';
          exercise2='<break time="3s"/> Next "Relax by Counting". Numbers from 10 to 0. 10<break time="0.5s"/> 8<break time="0.5s"/>9<break time="0.5s"/> 7<break time=".5s"/> 6<break time=".5s"/> 5 <break time=".5s"/>4<break time=".5s"/> 3<break time=".5s"/> 2<break time=".5s"/> 1'
          
         // vara=' Hello, My name is <break time="3s"/> Alexa';
          const s=` ${exercise1} ${exercise2}` ;
          
           return handlerInput.responseBuilder.speak(s).reprompt('Hi').getResponse();
      }
        
        
         
    }
    
    
    const thankHandler={
      canHandle(handlerInput){
            return handlerInput.requestEnvelope.request.type==='IntentRequest'
          && handlerInput.requestEnvelope.request.intent.name==='ThanksIntent';  
        },  
        
        handle(handlerInput){
            const s='You are most welcome. Remember it is always okay to seek out professional help and that you are not alone. Thank you for sharing. That was very brave and courageous. I am always here for you. If you ever need me just click on the chat optionHere is the Post Assessment that I want you to fill out.';
            return handlerInput.responseBuilder.speak(s).reprompt('Hi').getResponse();
        }
    }                                                                                                                                                     

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'It was really nice to talk with you. If you ever need me, come to me. Have a wonderful day.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
/* *
 * FallbackIntent triggers when a customer says something that doesn’t map to any intents in your skill
 * It must also be defined in the language model (if the locale supports it)
 * This handler can be safely added but will be ingnored in locales that do not support it yet 
 * */
const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
/* *
 * SessionEndedRequest notifies that a session was ended. This handler will be triggered when a currently open 
 * session is closed for one of the following reasons: 1) The user says "exit" or "quit". 2) The user does not 
 * respond or says something that does not match an intent defined in your voice model. 3) An error occurs 
 * */
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};
/* *
 * The intent reflector is used for interaction model testing and debugging.
 * It will simply repeat the intent the user said. You can create custom handlers for your intents 
 * by defining them above, then also adding them to the request handler chain below 
 * */
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
/**
 * Generic error handling to capture any syntax or routing errors. If you receive an error
 * stating the request handler chain is not found, you have not implemented a handler for
 * the intent being invoked or included it in the skill builder below 
 * */
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        NameRequestHandler,
        SituationHandler,
        poshandler,
        Goingheadhandler,
       // RatingHandler4,
        ResponsehandlerNeg,
        ReadyHandler,
        
        ConfirmdayHnadler,
        
        BadsituationHandler,
        PanicHandler,
        
        ImpactHandler,
        RatingHandler,
       // RatingHandler2,
        //RatingHandler3,
        RatingHandler4,
        WorldHandler,
        FamilyHandler,
        UnemploymentHandle,
        WorkOutIntent,
        Quarantinehandler,
        DeathIntentHandler,
        ExerciseHandler,
        thankHandler,
        
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();