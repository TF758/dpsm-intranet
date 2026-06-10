import { ContactForm } from "@/components/contact/contact-form";
import { PageContainer } from "@/components/layout/page-container";
import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function Page() {
  return (
    <PageContainer>
      <PageHeader
        title="Contact Us"
        description="Send a message to the DPSM team and we will respond as soon as possible."
      />

      <div className="mx-auto max-w-3xl">
        <Card>
          <CardContent className="p-8">
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
