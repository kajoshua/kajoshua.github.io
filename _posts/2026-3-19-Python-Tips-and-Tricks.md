---
layout: post
title: Python Tips and Tricks
excerpt_separator: <!--more-->
---

Beginning my repository of Python, Git, and VSC tips and tricks here.

<!--more-->


# VS Code Tips


### Keybindings
Place the following code block into `keybindings.json`, located in CTRL+SHIFT+P > `Preferences: Open Keyboard Shortcuts (JSON)`.


```
[
    {
        "key": "ctrl+tab",
        "command": "workbench.action.nextEditor"
    },
    {
        "key": "ctrl+shift+tab",
        "command": "workbench.action.previousEditor"
    }
]
```

### Collapse Functions
* To collapse all functions in VSC, run `CTRL+K CTRL+0`; to expand all functions, run `CTRL+K CTRL+J`.



# Python Style Guides
* <a href="https://peps.python.org/pep-0008/">Python Style Guide</a>


# Microsoft Edge
* Microsoft Edge by default on Windows 10/11 changes tabs when you do ALT+TAB and want to change windows. To change this, go to Settings -> Multitasking -> Alt + Tab and set "Open Alt + Tab shows" to "open windows only".


# Git Tips

### New Branches
* Create a new branch using `git checkout -b NewBranchName`
* To push the new branch use `git push -u origin NewBranchName`


### Accidentally deleted a file during a commit to non-main branch
* Use `git checkout origin/main -- path/to/file1`



# Python Tips

### Pytests on Jupyter
```
import ipytest
ipytest.autoconfig()
```

```
%%ipytest
% run -i myFile.py
```

* For plotting on Jupyter
```
import plotly.io as pio
pio.renderers.default = "colab"
```

### Partial functions

```
from functools import Partial

def funcA(varA, varB):
    return varA + varB
    
def funcB():
    varB = 42
    return partial(funcA, varB = varB)
```





