import 'codemirror/addon/edit/closebrackets'
import 'codemirror/addon/edit/closetag'
import 'codemirror/addon/fold/brace-fold'
import 'codemirror/addon/fold/comment-fold'
import 'codemirror/addon/fold/foldcode'
import 'codemirror/addon/fold/foldgutter'
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/hint/anyword-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/keymap/sublime'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/material.css'
import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

function CodeEditor(props) {
    const content = props.content
    const setContent = props.setContent
    return (
        <CodeMirror
            style={{ alignItems: 'left', alignText: 'left' }}
            value={content.code}
            options={{
                mode: content.language,
                theme: 'material',
                lineWrapping: true,
                smartIndent: true,
                lineNumbers: true,
                autoCloseTags: true,
                keyMap: 'sublime',
                matchBrackets: true,
                autoCloseBrackets: true,
                extraKeys: {
                    'Ctrl-Space': 'autocomplete',
                },
            }}
            onBeforeChange={(editor, data, value) => {
                setContent({
                    ...content,
                    code: value,
                })
            }}
        />
    )
}

export default CodeEditor
