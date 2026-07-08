import React, { useState, useMemo } from "react";
import {
  User,
  Mail,
  Phone,
  Globe,
  Landmark,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Check,
  CreditCard,
  PiggyBank,
  Key,
  Eye,
  EyeOff,
  Shield,
  Lock,
  CheckCircle,
  Circle,
  X,
  Calendar,
  Briefcase,
  Bitcoin,
  Building,
  TrendingUp,
} from "lucide-react";

const COUNTRIES = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua & Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia & Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Greenland",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malaysia",
  "Malawi",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const CURRENCIES = [
  { value: "USD", label: "USD - United States Dollar" },
  { value: "EUR", label: "EUR - Euro" },
  { value: "GBP", label: "GBP - British Pound" },
  { value: "AUD", label: "AUD - Australian Dollar" },
  { value: "CAD", label: "CAD - Canadian Dollar" },
  { value: "JPY", label: "JPY - Japanese Yen" },
  { value: "CNY", label: "CNY - Chinese Yuan" },
  { value: "INR", label: "INR - Indian Rupee" },
  { value: "BRL", label: "BRL - Brazilian Real" },
  { value: "NGN", label: "NGN - Nigerian Naira" },
  { value: "ZAR", label: "ZAR - South African Rand" },
  { value: "SGD", label: "SGD - Singapore Dollar" },
  { value: "AED", label: "AED - UAE Dirham" },
  { value: "SAR", label: "SAR - Saudi Riyal" },
];

const EXTRA_ACCOUNT_TYPES = [
  {
    value: "Fixed Deposit Account",
    label: "Fixed Deposit Account",
    desc: "Highest interest rates for fixed terms",
    icon: Calendar,
  },
  {
    value: "Current Account",
    label: "Current Account",
    desc: "For everyday business transactions",
    icon: Briefcase,
  },
  {
    value: "Crypto Currency Account",
    label: "Crypto Currency Account",
    desc: "For digital currency management",
    icon: Bitcoin,
  },
  {
    value: "Business Account",
    label: "Business Account",
    desc: "For small to medium businesses",
    icon: Building,
  },
  {
    value: "Non Resident Account",
    label: "Non Resident Account",
    desc: "For international customers",
    icon: Globe,
  },
  {
    value: "Cooperate Business Account",
    label: "Cooperate Business Account",
    desc: "For large corporations",
    icon: Landmark,
  },
  {
    value: "Investment Account",
    label: "Investment Account",
    desc: "For stocks and securities",
    icon: TrendingUp,
  },
];

const TOTAL_STEPS = 4;

const STEP_META = [
  { key: 1, label: "Personal Info" },
  { key: 2, label: "Contact Details" },
  { key: 3, label: "Account Setup" },
  { key: 4, label: "Security" },
];

function TextField({ id, label, required, icon: Icon, ...props }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-2"
      >
        {label} {required && "*"}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          id={id}
          name={id}
          className={`w-full ${Icon ? "pl-10" : "px-4"} pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
          {...props}
        />
      </div>
    </div>
  );
}

export default function RegistrationForm({ onSubmit }) {
  const [step, setStep] = useState(1);
  const [showMoreTypes, setShowMoreTypes] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    country: "",
    currency: "",
    accountType: "",
    pin: "",
    password: "",
    password_confirmation: "",
    terms: false,
  });

  const update = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const progress = (step / TOTAL_STEPS) * 100;

  const validateCurrentStep = () => {
    if (step === 1)
      return formData.firstName && formData.lastName && formData.userName;
    if (step === 2)
      return formData.email && formData.phoneNumber && formData.country;
    if (step === 3) return formData.accountType && formData.pin.length === 4;
    if (step === 4)
      return (
        formData.password &&
        formData.password_confirmation &&
        formData.password === formData.password_confirmation &&
        formData.terms
      );
    return true;
  };

  const nextStep = () => {
    if (validateCurrentStep() && step < TOTAL_STEPS) {
      setStep((s) => s + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((s) => s - 1);
      window.scrollTo(0, 0);
    }
  };

  const passwordStrength = useMemo(() => {
    const pwd = formData.password;
    let score = 0;
    if (pwd.length > 7) score += 1;
    if (pwd.length > 10) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;
    return score;
  }, [formData.password]);

  const strengthLabels = [
    "Very Weak",
    "Weak",
    "Fair",
    "Good",
    "Strong",
    "Very Strong",
  ];
  const strengthColors = [
    "bg-red-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-green-500",
  ];
  const strengthTextColors = [
    "text-red-600",
    "text-red-600",
    "text-yellow-600",
    "text-yellow-600",
    "text-green-600",
    "text-green-600",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;
    if (onSubmit) onSubmit(formData);
    else console.log("Registration submitted:", formData);
  };

  const passwordsMatch =
    formData.password && formData.password_confirmation
      ? formData.password === formData.password_confirmation
      : null;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Header */}
        <div className="bg-gray-50 px-8 py-6 border-b border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-900">
              Create Your Account
            </h2>
            <span className="text-sm font-medium text-gray-500">
              Step {step} of {TOTAL_STEPS}
            </span>
          </div>

          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between mt-2 text-xs text-gray-500">
            {STEP_META.map((s) => (
              <div
                key={s.key}
                className={`text-center ${step >= s.key ? "text-blue-600 font-medium" : ""}`}
              >
                {s.label}
              </div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="px-8 py-6">
          <div onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Personal Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Please provide your legal name as it appears on official
                    documents
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <TextField
                    id="firstName"
                    label="Legal First Name"
                    required
                    placeholder="John"
                    value={formData.firstName}
                    onChange={update("firstName")}
                  />
                  <TextField
                    id="middleName"
                    label="Middle Name"
                    placeholder="David"
                    value={formData.middleName}
                    onChange={update("middleName")}
                  />
                  <TextField
                    id="lastName"
                    label="Legal Last Name"
                    required
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={update("lastName")}
                  />
                  <TextField
                    id="userName"
                    label="UserName"
                    required
                    placeholder="johnsmith123"
                    value={formData.userName}
                    onChange={update("userName")}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {step === 2 && (
              <div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Contact Information
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    We'll use these details to communicate with you about your
                    account
                  </p>
                </div>

                <div className="space-y-6 mb-6">
                  <TextField
                    id="email"
                    label="Email Address"
                    required
                    type="email"
                    icon={Mail}
                    placeholder="john.smith@example.com"
                    value={formData.email}
                    onChange={update("email")}
                  />
                  <TextField
                    id="phoneNumber"
                    label="Phone Number"
                    required
                    type="tel"
                    icon={Phone}
                    placeholder="+1 (234) 567-8901"
                    value={formData.phoneNumber}
                    onChange={update("phoneNumber")}
                  />

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Country *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Globe className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={update("country")}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                        required
                      >
                        <option value="" disabled>
                          Select your country
                        </option>
                        {COUNTRIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Account Setup */}
            {step === 3 && (
              <div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <Landmark className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Account Setup
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose your account type and set up your transaction PIN
                  </p>
                </div>

                <div className="space-y-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Type *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          value: "Checking Account",
                          label: "Checking Account",
                          desc: "Perfect for daily transactions and bill payments",
                          icon: CreditCard,
                        },
                        {
                          value: "Savings Account",
                          label: "Savings Account",
                          desc: "Earn interest on your deposits",
                          icon: PiggyBank,
                        },
                      ].map((type) => (
                        <label
                          key={type.value}
                          onClick={() =>
                            setFormData((p) => ({
                              ...p,
                              accountType: type.value,
                            }))
                          }
                          className="relative block cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="accountType"
                            value={type.value}
                            checked={formData.accountType === type.value}
                            onChange={() => {}}
                            className="sr-only"
                          />
                          <div
                            className={`border rounded-lg p-4 transition-all ${
                              formData.accountType === type.value
                                ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500"
                                : "border-gray-300 hover:border-blue-300"
                            }`}
                          >
                            <div className="flex items-start">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                  <type.icon className="h-5 w-5 text-blue-600" />
                                </div>
                              </div>
                              <div className="ml-3">
                                <h4 className="text-sm font-medium text-gray-900">
                                  {type.label}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {type.desc}
                                </p>
                              </div>
                            </div>
                            {formData.accountType === type.value && (
                              <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                <Check className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>

                    {/* Additional account types */}
                    <div className="mt-4">
                      <button
                        type="button"
                        onClick={() => setShowMoreTypes((o) => !o)}
                        className="w-full text-left flex items-center justify-between text-sm text-blue-600 hover:text-blue-700 focus:outline-none"
                      >
                        <span>Show more account types</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${showMoreTypes ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Currency Selection */}
                      <div className="mt-4">
                        <label
                          htmlFor="currency"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Account Currency *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Landmark className="h-5 w-5 text-gray-400" />
                          </div>
                          <select
                            id="currency"
                            name="currency"
                            value={formData.currency}
                            onChange={update("currency")}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                            required
                          >
                            <option value="" disabled>
                              Select currency
                            </option>
                            {CURRENCIES.map((c) => (
                              <option key={c.value} value={c.value}>
                                {c.label}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>

                      {showMoreTypes && (
                        <div className="mt-2 space-y-2">
                          {EXTRA_ACCOUNT_TYPES.map((type) => (
                            <label
                              key={type.value}
                              onClick={() =>
                                setFormData((p) => ({
                                  ...p,
                                  accountType: type.value,
                                }))
                              }
                              className="relative block cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="accountType"
                                value={type.value}
                                checked={formData.accountType === type.value}
                                onChange={() => {}}
                                className="sr-only"
                              />
                              <div
                                className={`border rounded-lg p-4 transition-all ${
                                  formData.accountType === type.value
                                    ? "border-blue-500 bg-blue-50 ring-2 ring-blue-500"
                                    : "border-gray-300 hover:border-blue-300"
                                }`}
                              >
                                <div className="flex items-start">
                                  <div className="flex-shrink-0">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                      <type.icon className="h-5 w-5 text-blue-600" />
                                    </div>
                                  </div>
                                  <div className="ml-3">
                                    <h4 className="text-sm font-medium text-gray-900">
                                      {type.label}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                      {type.desc}
                                    </p>
                                  </div>
                                </div>
                                {formData.accountType === type.value && (
                                  <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                    <Check className="h-3 w-3 text-white" />
                                  </div>
                                )}
                              </div>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Transaction PIN */}
                  <div>
                    <label
                      htmlFor="pin"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Transaction PIN (4 digits) *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Key className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPin ? "text" : "password"}
                        id="pin"
                        name="pin"
                        value={formData.pin}
                        onChange={(e) => {
                          const digits = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 4);
                          setFormData((p) => ({ ...p, pin: digits }));
                        }}
                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="••••"
                        maxLength={4}
                        inputMode="numeric"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPin((s) => !s)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPin ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Your PIN will be required to authorize transactions
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Security */}
            {step === 4 && (
              <div>
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Secure Your Account
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Create a strong password to protect your account
                  </p>
                </div>

                <div className="space-y-6 mb-6">
                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={update("password")}
                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>

                    {/* Password Strength Meter */}
                    {formData.password.length > 0 && (
                      <div className="mt-2">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-xs text-gray-500">
                            Password strength:{" "}
                            <span
                              className={
                                strengthTextColors[passwordStrength] ||
                                "text-red-600"
                              }
                            >
                              {strengthLabels[passwordStrength] || "Very Weak"}
                            </span>
                          </p>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ease-in-out ${
                              strengthColors[passwordStrength] || "bg-red-500"
                            }`}
                            style={{
                              width: `${(passwordStrength / 5) * 100}%`,
                            }}
                          />
                        </div>
                        <ul className="mt-2 space-y-1 text-xs text-gray-500">
                          {[
                            {
                              ok: formData.password.length > 7,
                              label: "At least 8 characters",
                            },
                            {
                              ok: /[A-Z]/.test(formData.password),
                              label: "At least one uppercase letter",
                            },
                            {
                              ok: /[0-9]/.test(formData.password),
                              label: "At least one number",
                            },
                            {
                              ok: /[^A-Za-z0-9]/.test(formData.password),
                              label: "At least one special character",
                            },
                          ].map((rule, i) => (
                            <li
                              key={i}
                              className={`flex items-center ${rule.ok ? "text-green-600" : ""}`}
                            >
                              {rule.ok ? (
                                <CheckCircle className="h-3 w-3 mr-1" />
                              ) : (
                                <Circle className="h-3 w-3 mr-1" />
                              )}
                              {rule.label}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label
                      htmlFor="password_confirmation"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="password_confirmation"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={update("password_confirmation")}
                        className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="••••••••"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((s) => !s)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                    {passwordsMatch !== null && (
                      <p
                        className={`mt-1 text-sm ${passwordsMatch ? "text-green-600" : "text-red-600"}`}
                      >
                        {passwordsMatch ? (
                          <span className="inline-flex items-center gap-1">
                            <Check className="h-3 w-3" /> Passwords match
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1">
                            <X className="h-3 w-3" /> Passwords do not match
                          </span>
                        )}
                      </p>
                    )}
                  </div>

                  {/* Terms and Conditions */}
                  <div>
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={update("terms")}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mt-1"
                        required
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        I agree to the{" "}
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-500 font-medium underline"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-blue-600 hover:text-blue-500 font-medium underline"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Step Navigation */}
            <div className="flex justify-between pt-4 border-t border-gray-200">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </button>
              ) : (
                <div />
              )}

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!validateCurrentStep()}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!validateCurrentStep()}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Create Account
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Login Link */}
        <div className="text-center mt-4 pb-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-blue-600 hover:text-blue-500 font-medium"
            >
              Sign in instead
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
