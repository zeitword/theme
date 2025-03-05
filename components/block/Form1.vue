<script setup lang="ts">
import type { TBackground, TButton, TField, TTextLink, TSpacing } from "~~/types"

interface Props {
  spacing?: TSpacing
  background?: TBackground
  fields: TField[]
  submitButton: TButton
  privacyText: string
  privacyLink: TTextLink
	messages: SubmitMessages
}

type SubmitMessages = {
	success: string
	error: string
} 

const {
  spacing = { vertical: "md" },
  background = { color: "neutral", visible: true },
  fields = [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "Enter your first name",
      required: true
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter your last name",
      required: true
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true
    },
    {
      type: "textarea",
      name: "message",
      label: "Message",
      placeholder: "How can we help you?",
      required: true
    }
  ],
  submitButton = {
    text: "Submit",
    variant: "primary"
  },
  privacyText = "By submitting this form, you agree that we may store and process the data entered in the contact form.",
  privacyLink = {
    text: "Privacy Policy",
    link: { url: "/privacy" }
  },
	messages = {
		success: "Thank you for your message!",
		error: "There was an error submitting your message. Please try again later."
	}
} = defineProps<Props>()

const url = getUrl()

const formData = ref<Record<string, string>>({})
const isSubmitting = ref(false)
const submitStatus = ref<{ success: boolean; message: string } | null>(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitStatus.value = null
  try {
    const response = await $fetch(`/api/projects/${url.hostname}/submit-form`, {
      method: "POST",
      body: formData.value
    })
    submitStatus.value = { success: true, message: messages.success }
    formData.value = {}
  } catch (error: any) {
    submitStatus.value = { success: false, message: error.message || messages.error }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <DBackground v-bind="background">
    <DWrapper :spacing="spacing">
      <form
        @submit.prevent="handleSubmit"
        class="mx-auto max-w-2xl"
      >
        <div class="grid gap-6">
          <div
            v-for="field in fields"
            :key="field.name"
            class="flex flex-col gap-2"
          >
            <template v-if="field.type === 'textarea'">
              <label
                :for="field.name"
                class="text-neutral font-weight-medium"
              >
                {{ field.label }}
                <span
                  v-if="field.required"
                  class="text-red-500"
                >
                  *
                </span>
              </label>
              <textarea
                :id="field.name"
                v-model="formData[field.name]"
                :name="field.name"
                :placeholder="field.placeholder"
                :required="field.required"
                rows="4"
                class="border-neutral-strong focus:ring-primary focus:border-primary w-full rounded-md border px-4 py-2 outline-none focus:ring-2"
              />
            </template>
            <template v-else-if="field.type === 'checkbox'">
              <div class="flex items-center gap-2">
                <label
                  :for="field.name"
                  class="text-neutral font-weight-medium"
                >
                  {{ field.label }}
                  <span
                    v-if="field.required"
                    class="text-red-500"
                  >
                    *
                  </span>
                </label>
                <input
                  :id="field.name"
                  v-model="formData[field.name]"
                  type="checkbox"
                  :name="field.name"
                  :placeholder="field.placeholder"
                  :required="field.required"
                />
              </div>
            </template>

            <template v-else-if="field.type === 'select'">
              <label
                :for="field.name"
                class="text-neutral font-weight-medium"
              >
                {{ field.label }}
                <span
                  v-if="field.required"
                  class="text-red-500"
                >
                  *
                </span>
              </label>
							<select v-model="formData[field.name]" :name="field.name" :required="field.required"
								class="border-neutral-strong focus:ring-primary focus:border-primary w-full rounded-md border px-4 py-2 outline-none focus:ring-2"
							>
								<option v-for="option in field.options" :value="option.value" :key="option.value">
									{{ option.label }}
								</option>
							</select>
            </template>

            <template v-else-if="field.type === 'datetime'">
              <label
                :for="field.name"
                class="text-neutral font-weight-medium"
              >
                {{ field.label }}
                <span
                  v-if="field.required"
                  class="text-red-500"
                >
                  *
                </span>
              </label>
              <input
                :id="field.name"
                v-model="formData[field.name]"
                type="datetime-local"
                :name="field.name"
                :placeholder="field.placeholder"
                :required="field.required"
                class="border-neutral-strong focus:ring-primary focus:border-primary w-full rounded-md border px-4 py-2 outline-none focus:ring-2"
              />
            </template>
            <template v-else>
              <label
                :for="field.name"
                class="text-neutral font-weight-medium"
              >
                {{ field.label }}
                <span
                  v-if="field.required"
                  class="text-red-500"
                >
                  *
                </span>
              </label>
              <input
                :id="field.name"
                v-model="formData[field.name]"
                :type="field.type"
                :name="field.name"
                :placeholder="field.placeholder"
                :required="field.required"
                class="border-neutral-strong focus:ring-primary focus:border-primary w-full rounded-md border px-4 py-2 outline-none focus:ring-2"
              />
            </template>
          </div>

          <div class="text-neutral-subtle text-sm">
            {{ privacyText }}
            <NuxtLink
              :to="privacyLink.link.url"
              :target="privacyLink.link.target"
              class="text-primary hover:underline"
            >
              {{ privacyLink.text }}
            </NuxtLink>
          </div>

          <BaseButton
            v-bind="submitButton"
            type="submit"
            :disabled="isSubmitting"
            class="w-full"
          >
            {{ isSubmitting ? "Sending..." : submitButton.text }}
          </BaseButton>

          <div
            v-if="submitStatus"
            :class="['text-center', submitStatus.success ? 'text-green-600' : 'text-red-600']"
          >
            {{ submitStatus.message }}
          </div>
        </div>
      </form>
    </DWrapper>
  </DBackground>
</template>
