export async function getData(url: string) {
    let req = await fetch(url)
    let res = await req.json()
    return res;
}