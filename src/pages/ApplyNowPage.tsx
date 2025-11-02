import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ApplyNowPage = () => {
const navigate = useNavigate();
const [formData, setFormData] = useState({
firstName: "",
lastName: "",
email: "",
phone: "",
course: "",
experience: "",
education: "",
portfolio: "",
message: "",
});

const [isSubmitted, setIsSubmitted] = useState(false);

// ✅ handleChange with phone validation
const handleChange = (e) => {
const { name, value } = e.target;


// ✅ Allow only digits for phone number (max 10)
if (name === "phone") {
  const numericValue = value.replace(/\D/g, ""); // remove all non-digits
  if (numericValue.length <= 10) {
    setFormData({ ...formData, [name]: numericValue });
  }
  return;
}

setFormData({
  ...formData,
  [name]: value,
});


};

const handleSubmit = async (e) => {
e.preventDefault();


// ✅ Map frontend fields to Django serializer fields
const payload = {
  first_name: formData.firstName,
  last_name: formData.lastName,
  email: formData.email,
  phone: formData.phone,
  course: formData.course,
  experience: formData.experience,
  education: formData.education,
  github_link: formData.portfolio,
  message: formData.message,
};

try {
  const response = await fetch("http://127.0.0.1:8000/api/apply/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        course: "",
        experience: "",
        education: "",
        portfolio: "",
        message: "",
      });
      navigate("/"); // redirect home
    }, 2000);
  } else {
    const errorData = await response.json();
    console.error("Failed to submit form:", errorData);
  }
} catch (error) {
  console.error("Error:", error);
}


};

return ( <div className="min-h-screen bg-background text-foreground flex flex-col"> <Navigation /> <main className="flex-grow pt-14"> <section className="py-20 px-6 bg-secondary/30"> <div className="container mx-auto max-w-3xl">
<motion.div
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-center mb-12"
> <h1 className="text-5xl md:text-6xl font-semibold mb-4 tracking-tight bg-gradient-to-br from-orange-500 to-yellow-400 bg-clip-text text-transparent">
Apply Now </h1> <p className="text-lg text-muted-foreground">
Join Prodisyn Innovations and start your journey in embedded systems engineering </p>
</motion.div>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-3xl p-8 md:p-12 shadow-lg"
        >
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="h-16 w-16 mx-auto mb-4 text-green-500" />
              <h2 className="text-3xl font-semibold mb-2">Application Submitted!</h2>
              <p className="text-muted-foreground">
                Thank you for your interest. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* ✅ Phone Number Validation */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
                {formData.phone && formData.phone.length !== 10 && (
                  <p className="text-red-500 text-sm mt-1">
                    Please enter a valid 10-digit phone number.
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Course/Program Interest *</Label>
                <select
                  id="course"
                  name="course"
                  required
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                >
                  <option value="">Select a course</option>
                  <option value="embedded-training">Embedded Systems Training</option>
                  <option value="product-engineering">Product Engineering</option>
                  <option value="technical-consulting">Technical Consulting</option>
                  <option value="process-consulting">Process Consulting</option>
                  <option value="internship">Internship Program</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Education Background (With CGPA) *</Label>
                <Input
                  id="education"
                  name="education"
                  type="text"
                  required
                  placeholder="e.g., B.Tech in Electronics, Diploma in Embedded Systems - CGPA: 8.5"
                  value={formData.education}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Relevant Experience (if any)</Label>
                <Textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  placeholder="Describe your relevant work experience, projects, or skills"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="portfolio">Portfolio/GitHub Link</Label>
                <Input
                  id="portfolio"
                  name="portfolio"
                  type="url"
                  placeholder="https://github.com/yourusername"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us why you're interested in joining Prodisyn..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={formData.phone.length !== 10}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Have questions? Contact us at{" "}
            <a href="mailto:info@prodisyn.com" className="text-primary hover:underline">
              info@prodisyn.com
            </a>{" "}
            or call{" "}
            <a href="tel:+916360677217" className="text-primary hover:underline">
              +91 63606 77217
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  </main>
  <Footer />
</div>


);
};

export default ApplyNowPage;
