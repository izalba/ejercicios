const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
  ];
  
  let nonPremiumUsers = [];
  
  for (let i = 0; i < users.length; i++) {
    if (users[i].premium) {
      console.log(`El usuario ${users[i].username} es premium.`);
    } else {
      nonPremiumUsers.push(users[i]);
    }
  }
  
  