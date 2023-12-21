async function verifyCaptcha(token: string): Promise<{ success: boolean, errorCodes: never[] }> {
    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${import.meta.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        {
            method: "POST",
        }
    );
    const data = await response.json();
    return {
        success: data.success,
        errorCodes: data["error-codes"]
    }
}

export { verifyCaptcha };