
# Social Network JavaScript Implementation

This documentation provides an overview of the code for a social network represented as a graph, where individuals are nodes, and friendships are edges between those nodes. The application allows adding individuals, establishing friendships, updating individual details, and calculating the degree of separation between two people.

## Data Structure

The social network is represented using a `Map` object in JavaScript. The `Map` stores each individual as a key, and its corresponding value is an object containing the individual's details and a set of friends. The friends are stored in a `Set` to ensure uniqueness and efficient lookup.

- **Node (Individual)**: Each individual is represented by a key-value pair in the `Map`. The key is the individual's name, and the value is an object with their details and a set of friends.
- **Edge (Friendship)**: A friendship between two individuals is represented by adding each individual to the other's set of friends.

## Class: `SocialNetwork`

The `SocialNetwork` class encapsulates the data structure and provides methods to manage the social network.

### Constructor

- **`constructor()`**: Initializes a new `SocialNetwork` object with an empty `Map` to store individuals.

### Methods

1. **`addPerson(name, details = {})`**: Adds a new individual to the social network.
   - **Parameters**:
     - `name` (String): The name of the individual.
     - `details` (Object): Optional details about the individual (e.g., age, occupation).
   - **Behavior**: If the individual does not already exist, they are added to the network with the provided details. If the individual exists, a message is logged to the console.

2. **`addFriendship(name1, name2)`**: Establishes a friendship between two individuals.
   - **Parameters**:
     - `name1` (String): Name of the first individual.
     - `name2` (String): Name of the second individual.
   - **Behavior**: If both individuals exist in the network, a two-way friendship is established by adding each individual to the other's set of friends. If one or both individuals do not exist, a message is logged to the console.

3. **`updatePersonDetails(name, newDetails)`**: Updates the details of an individual in the network.
   - **Parameters**:
     - `name` (String): The name of the individual.
     - `newDetails` (Object): An object containing the new details to update (e.g., age, occupation).
   - **Behavior**: If the individual exists, their details are updated with the provided information. If the individual does not exist, a message is logged to the console.

4. **`degreeOfSeparation(name1, name2)`**: Calculates the degree of separation between two individuals.
   - **Parameters**:
     - `name1` (String): Name of the first individual.
     - `name2` (String): Name of the second individual.
   - **Returns**: The degree of separation (an integer) between the two individuals. If no connection is found or one/both individuals do not exist, it returns `-1`.
   - **Behavior**: Uses the Breadth-First Search (BFS) algorithm to find the shortest path between the two individuals, representing the minimum number of friendships required to connect them.

## Example Usage

Below is an example that demonstrates how to use the `SocialNetwork` class, add individuals, establish friendships, and calculate degrees of separation.

```javascript
// Initialize the social network
const network = new SocialNetwork();

// Add individuals
network.addPerson('Alice');
network.addPerson('Bob');
network.addPerson('Charlie');
network.addPerson('David');

// Establish friendships
network.addFriendship('Alice', 'Bob');
network.addFriendship('Bob', 'Charlie');
network.addFriendship('Charlie', 'David');

// Update individual details
network.updatePersonDetails('Alice', { age: 30, occupation: 'Engineer' });

// Calculate degrees of separation
console.log(network.degreeOfSeparation('Alice', 'David')); // Output: 3
console.log(network.degreeOfSeparation('Alice', 'Charlie')); // Output: 2
console.log(network.degreeOfSeparation('Alice', 'Alice')); // Output: 0
console.log(network.degreeOfSeparation('Alice', 'Eve')); // Output: -1 (Eve is not in the network)
```

## Running the Application

1. **Environment Setup**: Ensure you have a JavaScript runtime environment (e.g., Node.js) installed on your system.
2. **Create a File**: Copy the provided JavaScript code into a file, e.g., `socialNetwork.js`.
3. **Execute the File**: Open a terminal or command prompt and navigate to the directory where the file is saved. Run the file using the JavaScript runtime, such as:
   ```bash
   node socialNetwork.js
   ```
   This will execute the code and print the degrees of separation to the console.

## Example Scenarios

- **Calculating Degrees of Separation**:
  - **Example 1**: If `Alice` is friends with `Bob`, `Bob` is friends with `Charlie`, and `Charlie` is friends with `David`, the degree of separation between `Alice` and `David` is `3`.
  - **Example 2**: If `Alice` is friends with `Bob` and `Bob` is friends with `Charlie`, the degree of separation between `Alice` and `Charlie` is `2`.
  - **Example 3**: If `Alice` is trying to find the degree of separation from herself, it will always be `0`.

## Conclusion

This implementation provides a robust way to manage a social network, perform operations to add and update individuals and their friendships, and calculate the shortest connection path between two individuals using the BFS algorithm. This example serves as a foundation and can be extended to include more advanced features like removing individuals, handling more complex relationships, and more sophisticated data validation and error handling.
# social-network
