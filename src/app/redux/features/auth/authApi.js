"use client";

export async function fetchCount(amount = 1) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch('http://localhost:8080');

            if (!response.ok) {
                // If the response status is not OK (e.g., 404 or 500),
                // reject the Promise with an error message
                reject(`Error: ${response.statusText}`);
                return;
            }

            const data = await response.json();
            resolve({ data });
        } catch (error) {
            // Handle other network errors
            reject(`Network error: ${error.message}`);
        }
    });
}
