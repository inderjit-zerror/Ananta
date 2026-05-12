import Home from '@/components/Home'
import { createPageMetadata } from "@/lib/seo";

const page = () => {
  return (
    <Home/>
  )
}

export default page

export async function generateMetadata() {
  return createPageMetadata("/");
}

