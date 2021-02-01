const Firestore = require('@google-cloud/firestore');
const fireStore = new Firestore({
  projectId: process.env.GOOGLE_CLOUD_PROJECT,
});
/**
 * Triggered by a change to a Firestore document.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.claimedGuard = (event, context) => {
  const resource = context.resource;
  // log out the resource string that triggered the function
  console.log(`Updating ${resource}`);
  // now log the full event object
  console.log(JSON.stringify(event));
  // Analyze claimed
  const oldValue = event.oldValue;
  const value = event.value;
  
  if (value.fields.claimed.integerValue > value.fields.quantityAvailable.integerValue) {
    
    const path = value.name.split('/documents/')[1];
    const refDoc = fireStore.doc(path);
    console.warn('Pelamos');
    return refDoc.update({ claimed: oldValue.fields.claimed.integerValue, visible: false });
  } else {
    console.log('Al peluche');
  }
};
