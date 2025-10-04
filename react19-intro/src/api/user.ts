// v1 & v2
export const loginUser = async (username: string, password: string) => {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (username === 'ali' && password === '123') {

        return { success: true, data: { username, email: 'ali@gmail.com' } }

    } else {
        return { success: false, error: "Invalid Credentials." }
    }
}
// v3

export const loginAction = async (_ : unknown , formData:FormData)=>{

    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    if(username === 'ali' && password === '123' ){
        
        return {user: {username, email:'ali@gmail.com'}}

    }else{

        return {error: 'Invalid Credentials'}

    }
}