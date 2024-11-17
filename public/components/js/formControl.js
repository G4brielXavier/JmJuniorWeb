const form = document.querySelector('#formOrc');

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    console.log(data)

    try {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.message) {
            alert(result.message)
        } else {
            alert('Erro desconhecido ao enviar o e-mail.')
        }
    } catch (error) {
        console.error(error)
        alert('Erro ao enviar o formulário.');
    }
});