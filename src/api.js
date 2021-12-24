import Profile from './assest/media.png'

const TeamAPI = {
    members: [
        { no: 1, name: "Abdullah Meda", role: "coordinator", profilePic: Profile},
        { no: 2, name: "Arathi Raju", role: "coordinator", profilePic: Profile},
        { no: 3, name: "Aimee Lemma", role: "coordinator", profilePic: Profile},
        { no: 4, name: "John Mendez", role: "coordinator", profilePic: Profile},
        { no: 5, name: "Shreya Madhavdas", role: "coordinator", profilePic: Profile},
        { no: 6, name: "Soham kakra", role: "coordinator", profilePic: Profile},
        { no: 7, name: "Vaibhav Gadhalay", role: "coordinator", profilePic: Profile},
        { no: 8, name: "Yasser Sayed", role: "coordinator", profilePic: Profile},
    ],
    all: function() { return this.members},
    get: function(id) {
      const isMember = m => m.number === id
      return this.members.find(isMember)
    }
}

export default TeamAPI