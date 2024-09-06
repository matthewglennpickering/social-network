class SocialNetwork {
  constructor() {
    this.people = new Map(); // Map to store individuals and their details
  }

  // Method to add an individual
  addPerson(name, details = {}) {
    if (!this.people.has(name)) {
      this.people.set(name, { ...details, friends: new Set() });
    } else {
      console.log(`${name} already exists in the network.`);
    }
  }

  // Method to establish friendship between two individuals
  addFriendship(name1, name2) {
    if (this.people.has(name1) && this.people.has(name2)) {
      this.people.get(name1).friends.add(name2);
      this.people.get(name2).friends.add(name1);
    } else {
      console.log('One or both individuals are not in the network.');
    }
  }

  // Method to update individual details
  updatePersonDetails(name, newDetails) {
    if (this.people.has(name)) {
      const person = this.people.get(name);
      this.people.set(name, { ...person, ...newDetails });
    } else {
      console.log(`${name} is not found in the network.`);
    }
  }

  // Method to calculate the degree of separation between two individuals
  degreeOfSeparation(name1, name2) {
    if (!this.people.has(name1) || !this.people.has(name2)) {
      console.log('One or both individuals are not in the network.');
      return -1;
    }

    if (name1 === name2) return 0; // Same individual, degree of separation is 0

    const visited = new Set(); // Set to keep track of visited individuals
    const queue = [[name1, 0]]; // Queue for BFS, storing [person, degree]

    while (queue.length > 0) {
      const [current, degree] = queue.shift();
      visited.add(current);

      const friends = this.people.get(current).friends;

      for (const friend of friends) {
        if (friend === name2) {
          return degree + 1; // Found the target individual, return the degree of separation
        }
        if (!visited.has(friend)) {
          queue.push([friend, degree + 1]); // Add friends to the queue with incremented degree
          visited.add(friend); // Mark as visited
        }
      }
    }

    return -1; // If no connection is found, return -1
  }
}

// Example Usage
const network = new SocialNetwork();
network.addPerson('Alice');
network.addPerson('Bob');
network.addPerson('Charlie');
network.addPerson('David');
network.addPerson('Matthew');

network.addFriendship('Alice', 'Bob');
network.addFriendship('Bob', 'Charlie');
network.addFriendship('Charlie', 'David');
network.addFriendship('Matthew', 'David');

network.updatePersonDetails('Alice', { age: 30, occupation: 'Engineer' });
network.updatePersonDetails('Matthew', { age: 27, occupation: 'Software Engineer' })

console.log(network.degreeOfSeparation('Matthew', 'David'));// Output: 1
console.log(network.degreeOfSeparation('Alice', 'David')); // Output: 3
console.log(network.degreeOfSeparation('Alice', 'Charlie')); // Output: 2
console.log(network.degreeOfSeparation('Alice', 'Alice')); // Output: 0
