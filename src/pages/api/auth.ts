export default function handler(
  req: any,
  res: {
    setHeader: (arg0: string, arg1: string) => void;
    statusCode: number;
    end: (arg0: string) => void;
  }
) {
  res.setHeader("WWW-authenticate", 'Basic realm="Secure Area"');
  res.statusCode = 401;
  res.end(`Auth Required.`);
}
