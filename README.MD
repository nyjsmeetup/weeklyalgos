# Weekly NYJS Meetup Algorithm Challenges

<div>
  <table>
    <tr>
      <td>Date</td>
      <td>Easy</td>
      <td>Hard</td>
    </tr>
      <td>2019-09-29</td>
      <td><a href="easy/2019-09-29/Longest_Possible_Palindrome.js">Longest Possible Palindrome</a></td>
      <td><a href="hard/2019-09-29/Binary_Tree_Arithmetic.js">Binary Tree Arithmetic</a> </td>
    </tr>
    </tr>
      <td>2019-10-06</td>
      <td><a href="easy/2019-10-06/Caeser_Cipher.js">Caeser Cipher</a></td>
      <td><a href="hard/2019-10-06/Number_of_Islands.js">Number of Islands</a> </td>
    </tr>
     </tr>
      <td>2019-10-13</td>
      <td><a href="easy/2019-10-13/Pascals_Triangle.js">Pascal's Triangle</a></td>
      <td><a href="hard/2019-10-13/Find_Kth_Node_From_End_Of_Linked_List.js">Find The Kth Node From The End of a Linked List</a> </td>
    </tr>
    </tr>
      <td>2019-10-20</td>
      <td><a href="easy/2019-10-20/Max_Consecutive_Sum.js">Max Consecutive Sum</a></td>
      <td><a href="hard/2019-10-20/Counting_Bits.js">Counting Bits</a> </td>
    </tr>
  </table>
</div>

# Setting Everything Up

- ## Git(hub) Setup

Fork the repo

Clone the forked repo onto your local machine.

Add the original repo as upstream remote using either https or ssh

```
# https
git remote add upstream https://github.com/HypeDis/NYJS_Algos.git
# ssh
git remote add upstream git@github.com:HypeDis/NYJS_Algos.git
```

To get the latest every week use

```
git pull upstream master
```

- ## Installing Node Dependencies

```
npm i
```

- ## Testing Your Code

```
npm run test-watch testLocation
```

Example:

```
npm run test-watch ./easy/001
```

Note: jest does not require the full path name to find a test file
