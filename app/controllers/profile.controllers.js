module.exports = {
  index: function(req, res){
    var profile =

                  {
                    name: 'Sebastian Sim',
                    email: 'phistando@yahoo.com',
                    hobbies: 'archery and la kopi with friends',
                    description: 'A programming learner trying to explore the web development world'
                  };


    res.json(profile);

  }
};
