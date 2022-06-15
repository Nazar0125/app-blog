import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface typeProps {
    setValue: any, 
    name: any,
    register: any, 
    getValues: any
}

export const TinyEditor:React.FC<typeProps> = ({setValue, name, register, getValues}) => {
    
    return (
        <>
            <Editor
                apiKey= {'wb868lo1iyt22vwn9n8104osyyz8q46i53yzflagqveboeyz'}
                value={getValues(name)}
                onEditorChange={(newValue, editor) => {
                    setValue(name, newValue)
                }}
                {...register(name)}
                init={{
                    height: 510,
                    menubar: false,
                }}
            />
        </>
    )
}