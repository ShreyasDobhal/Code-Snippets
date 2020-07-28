# Git Commands

To add git to a local repository
```
git init
```


To check the status of the files (changed)
```
git status
```


To add files to staging area
```
git add <filename>
git add .
```


To remove file from staging area
```
git rm --cached <filename>
```


To commit changes 
```
git commit -m 'Commit Message'
```


To get the log of all the commits
```
git log
git log --oneline
git log --decorated --graph --oneline
```
To create an alias
```
git config --global alias.tree 'log --decorated --graph --oneline'
git tree
```

To see or go to some commit point in history
```
git checkout <commitid>
git checkout master
```


To revert change and save it as another commit
```
git revert <commitid>
```


To completely delete changes (commit) and rollback to some earlier commit
```
git reset <commitid>
git reset <commitid> --soft # removes commit, but retains changes in staging area
git reset <commitid> --mixed # removes from staging area as well, but retains changes in local 
git reset <commitid> --hard # removes the changes from local working dir as well.
```


To create a new branch (needs to be in master branch)
```
git branch <branchname> # (but still stays in master branch)
git checkout <branchname> # (to switch to that branch)
git checkout -b <branchname> # (to switch to a new branch)
```


To see all the branches (and current branch)
```
git branch -a
```


To delete a branch (needs to be in master branch)
```
git branch -D <branchname> # (if branch not already merged to master branch)
```


To merge a branch back into master branch (needs to be in master branch)
```
git merge <branchname>
```


To push project to a repository
```
git push <git-url.git> master
git remote add origin <git-url.git> # (Creating an alias for <git-url>, Use git remote -v to see all alias)
git push origin master
```


To clone a repo to your local system
```
git clone <git-url.git>
```


To pull all the changes made in a branch
```
git pull origin master
```

To compare two versions
```
git diff --name-only HEAD~1 # To see name of files that were changed since last commit
git diff <file-name> # To see changes made in a particular file since the last commit
git diff <SHA1> <SHA2> # To see differences between any two commits
```

## Working on Team Project

To collaborate on a project
1) Clone the repo using 
    git clone <git-url.git>
2) Create a branch using 
    git checkout -b <branchname>
3) Make changes on your project
4) Add modified files to staging area using 
    git add .
5) Commit the modified files
    git commit -m 'Commit message'
6) Push the changes to repo using
    git push origin <branchname>
    After this go to GitHub and accept the request to merge it into master branch
7) Before starting any changes use pull request in master branch to stay updated
    git checkout master
    git pull origin master
    git checkout <branchname>


## For re-organizing commits refer to 
(https://gist.github.com/loilo/930f141d9acf89e9e734ffa042acd750)
