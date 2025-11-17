import  twiml  from "twilio";

export const voice = async (req, res) => {
  try {
    const response = new twiml.VoiceResponse();

    const gather = response.gather({
      action: "/gather",
      method: "POST",
      numDigits: 1,
    });

    gather.say(
      "You have booked 11 seater mini bus. To confirm your order please press 1 or to cancel please press 2."
    );

    response.say("We did not receive anything. Goodbye.");

    res.type("text/xml");
    res.send(response.toString());
  } catch (error) {
    console.log("error", error);
  }
};

export const GatherResponse = async (req, res) => {
  try {
    const digit = req.body.Digits;
    const response = new twiml.VoiceResponse();

    if (digit === "1") {
      response.say("Thank you! Your order has been confirmed.");
    } else if (digit === "2") {
      response.say("Your order has been cancelled.");
    } else {
      response.say("Invalid input.");
    }

    res.type("text/xml");
    res.send(response.toString());
  } catch (error) {
    console.log("error", error);
  }
};
