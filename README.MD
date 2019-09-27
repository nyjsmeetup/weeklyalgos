# Weekly NYJS Meetup Algorithm Challenges

<div>
  <table>
    <tr>
      <td>Date</td>
      <td>Easy</td>
      <td>Hard</td>
    </tr>
      <td>2019-09-29</td>
      <td><a href="easy/001_Longest_Possible_Palindrome/001_Longest_Possible_Palindrome.js">Longest Possible Palindrome</a></td>
      <td><a href="hard/001_Binary_Tree_Arithmetic/001_Binary_Tree_Arithmetic.js">Binary Tree Arithmetic</a> </td>
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
