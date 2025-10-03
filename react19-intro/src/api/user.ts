export const loginUser = async (username: string, password: string) => {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (username === 'ali' && password === '123') {

        return { success: true, data: { username, email: 'ali@gmail.com' } }

    } else {
        return { success: false, error: "Invalid Credentials." }
    }
}