#!/bin/bash
cd /home/kavia/workspace/code-generation/todo-list-manager-0c3f8865/todos_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

