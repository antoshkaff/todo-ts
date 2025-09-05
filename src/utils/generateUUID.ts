type GenerateUUIDFn = () => string;

export const generateUUID: GenerateUUIDFn = () => {
    try {
        return crypto.randomUUID();
    } catch (error) {
        console.warn(error);
        return `id_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
    }
};
