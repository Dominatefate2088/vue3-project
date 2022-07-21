import { getJwtToken } from "../apis/auth";

export async function request(
    url,
    //默认get请求 auth设置true表示是否要发送token
    { method = "GET", body, headers, auth = true } = {}
) {
    const res = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
            ...(auth && { Authorization: `Bearer ${getJwtToken()}` }),
            ...headers,
        },
        ...(body && { body: JSON.stringify(body) }),
    });
    // if (res.status < 300) {
    const result = await res.json();
    return result;
    // }
    // } catch (error) {
    //   throw error;
    // }
}
