const dummyTextArea = document.createElement('textarea')

dummyTextArea.style.position = 'fixed'
dummyTextArea.style.bottom = '0'
dummyTextArea.style.right = '0'
dummyTextArea.style.left = '0'
dummyTextArea.style.height = '2em'

export function copyToClipboard(text: string): Promise<boolean|Error> {
    return new Promise((resolve, reject) => {
        dummyTextArea.value = text
        document.body.appendChild(dummyTextArea)
        dummyTextArea.focus()
        dummyTextArea.select()

        let success: boolean

        try {
            success = document.execCommand('copy')
        } catch (err) {
            document.body.removeChild(dummyTextArea)
            reject(err)
            return
        }

        document.body.removeChild(dummyTextArea)

        if (success) {
            resolve(success)
        } else {
            reject(success)
        }
    })
}
