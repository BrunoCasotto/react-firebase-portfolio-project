
import Firebase from 'firebase'
import 'firebase/database'

class FirebaseConnector {

  database = {}

  constructor() {
    const config = {
      apiKey: "AIzaSyAfzV40ZBsPhQ5-5iZ_JnDp3A0svRC3Myo",
      authDomain: "react-firebase-portfolio.firebaseapp.com",
      databaseURL: "https://react-firebase-portfolio.firebaseio.com",
      projectId: "react-firebase-portfolio",
      storageBucket: "",
      messagingSenderId: "805937573610"
    }
    Firebase.initializeApp(config)
    this.database = Firebase.database()
  }

  async getData() {
    return await this.database.ref('/')
      .on('value', (snapshot) => {
        return snapshot.val()
      })
  }
}

export default new FirebaseConnector()
