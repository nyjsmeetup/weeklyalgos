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
     </tr>
      <td>2019-11-03</td>
      <td><a href="easy/2019-11-03/Decimal_To_Binary.js">Converting Decimal to Binary</a></td>
      <td><a href="hard/2019-11-03/Construct_A_Trie.js">Construct a Trie</a> </td>
    </tr>
     </tr>
      <td>2019-11-17</td>
      <td><a href="Easy/2019-11-17/Sum_To_Zero.js">Sum To Zero</a></td>
      <td><a href="hard/2019-11-17/LRU_Cache.js">LRU Cache</a> </td>
    </tr>
      </tr>
      <td>2019-11-24</td>
      <td><a href="Easy/2019-11-24/Serialize_Deserialize.js"/>Serialize and Deserialize</a></td>
      <td><a href="hard/2019-11-24/Word_Search.js">Word Search</a> </td>
    </tr>
      </tr>
      <td>2019-12-01</td>
      <td><a href="Easy/2019-12-01/Find_The_Missing_Number.js">Find The Missing Number</a></td>
      <td><a href="hard/2019-12-01/Make_Valid_Parens_With_Minimal_Removal.js" >Make Valid Parens With Minimal Removal</a> </td>
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
